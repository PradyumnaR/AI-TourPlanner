import { fetchUserTokensById } from "@/utils/open-ai/tokens";
import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

async function ProfilePage() {
  const { userId } = auth();
  const currentTokens = await fetchUserTokensById(userId);
  return (
    <div className='pb-10'>
      {/* <h2 className='mb-8 ml-8 text-xl font-extrabold'>
        Token amount: {currentTokens}
      </h2> */}
      <div className='alert alert-info mb-5 rounded-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='stroke-current shrink-0 w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <span>Token amount: {currentTokens}</span>
      </div>
      <UserProfile />
    </div>
  );
}

export default ProfilePage;
