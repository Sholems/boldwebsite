
import { getMessages } from "@/actions/contact";
export const dynamic = 'force-dynamic';
import MessageInbox from "@/components/admin/MessageInbox";

export default async function AdminInboxPage() {
  const { data: messages } = await getMessages();

  return (
    <div className="space-y-6">
      <MessageInbox initialMessages={messages || []} />
    </div>
  );
}
