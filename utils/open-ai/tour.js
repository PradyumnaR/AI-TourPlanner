"use server";
import OpenAI from "openai";
import { ToursQuery } from "@/consts";
import prisma from "../db";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateTourResponse = async ({ city, country }) => {
  const query = ToursQuery({ city, country });

  try {
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "you are a tour guide" },
        { role: "user", content: query },
      ],
      model: "gpt-3.5-turbo",
      temperature: 1,
    });
    // potentially returns a text with error message
    const tourData = JSON.parse(response.choices[0].message.content);

    if (!tourData.tour) {
      return null;
    }

    console.log(tourData.tour);

    return { tour: tourData.tour, tokens: response.usage.total_tokens };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getExistingTour = async ({ city, country }) => {
  return prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
};

export const createNewTour = async (tour) => {
  return prisma.tour.create({
    data: tour,
  });
};

export const getAllTours = async (searchTerm) => {
  if (!searchTerm) {
    const tours = await prisma.tour.findMany({
      orderBy: {
        city: "asc",
      },
    });

    return tours;
  }

  const tours = await prisma.tour.findMany({
    where: {
      OR: [
        {
          city: {
            contains: searchTerm,
          },
          country: {
            contains: searchTerm,
          },
        },
      ],
    },
    orderBy: {
      city: "asc",
    },
  });

  return tours;
};

export const getSingleTour = async (id) => {
  return prisma.tour.findUnique({
    where: {
      id,
    },
  });
};

export const generateTourImage = async ({ city, country }) => {
  console.log("inside generate image");
  try {
    const response = await client.images.generate({
      model: "dall-e-2",
      prompt: `a panoramic view of the ${city} ${country}`,
      n: 1,
      size: "1024x1024",
    });

    return response?.data[0]?.url;
  } catch (err) {
    console.log(err);
    return null;
  }
};
