import { fetchOrGenerateTokens } from "@/utils/open-ai/tokens";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

async function MemberProfile() {
  const user = await currentUser();
  const { userId } = auth();

  await fetchOrGenerateTokens(userId);

  return (
    <div className='px-4 flex items-center gap-2'>
      <UserButton afterSwitchSessionUrl='/' />
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}

export default MemberProfile;
