import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Loading from "./loading";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import DeleteButton from "./DeleteButton";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: ticket } = await supabase
    .from("tickets")
    .select()
    .eq("id", params.id)
    .single();
  return {
    title: `Maurice Help| ${ticket?.title || "Not Found"}`,
  };
}

async function getTickets(id) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from("tickets")
    .select()
    .eq("id", id)
    .single();
  if (!data) {
    notFound();
  }

  return data;
}

export default async function ticketDetails({ params }) {
  const ticket = await getTickets(params.id);
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {data.session.user.email === ticket.user_email && (
            <DeleteButton id={params.id} />
          )}
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <div className="card">
          <h3>{ticket.title}</h3>
          <small>created by: {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      </Suspense>
    </main>
  );
}
