"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUserTokensById, subtractTokens } from "@/utils/open-ai/tokens";
import {
  generateTourResponse,
  getExistingTour,
  createNewTour,
} from "@/utils/open-ai/tour";

import toast from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";

import Loading from "./loading";
import CreateTour from "./CreateTour";
import Page from "../Page";

function NewTour() {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const existingTour = await getExistingTour(destination);

      if (existingTour) {
        return existingTour;
      }

      const currentTokens = await fetchUserTokensById(userId);

      if (currentTokens < 300) {
        toast.error("Token balance too low...");
        return;
      }

      const newTour = await generateTourResponse(destination);

      if (!newTour) {
        toast.error("No matching city found...");
        return null;
      }

      queryClient.invalidateQueries({ queryKey: ["tours"] });
      const newTokens = await subtractTokens(userId, newTour.tokens);
      toast.success(`${newTokens} tokens remaining...`);
      return newTour.tour;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  return (
    <Page>
      {isPending ? (
        <Loading />
      ) : (
        <CreateTour onSubmit={handleSubmit} tour={tour} />
      )}
    </Page>
  );
}

export default NewTour;
