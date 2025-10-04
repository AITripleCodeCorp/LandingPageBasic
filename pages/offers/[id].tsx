import { GetServerSideProps } from "next";
import styles from "./OfferDetails.module.css";

type ScheduleItem = {
  title: string;
  day_duration: number;
};

type CostItem = {
  title: string;
  cost: number;
};

type Offer = {
  id: string;
  created_at: string;
  updated_at: string;
  client_name: string;
  header: string;
  description: string;
  schedule_items: ScheduleItem[];
  cost_items: CostItem[];
  cost_sum: number;
};

export default function OfferDetails({ offer }: { offer: Offer }) {
  if (!offer) return <div>Offer not found</div>;
  return (
    <div className={styles.pageBackground}>
      <div className={styles.container}>
        <h1 className={styles.title}>{offer.header}</h1>
        <p>
          <strong>Client:</strong> {offer.client_name}
        </p>
        <p>
          <strong>Description:</strong> {offer.description}
        </p>
        <p>
          <strong>Created at:</strong> {offer.created_at}
        </p>
        <p>
          <strong>Updated at:</strong> {offer.updated_at}
        </p>
        <h2>Schedule</h2>
        <ul>
          {offer.schedule_items.map((item, idx) => (
            <li key={idx}>
              {item.title}: {item.day_duration} days
            </li>
          ))}
        </ul>
        <h2>Costs</h2>
        <ul>
          {offer.cost_items.map((item, idx) => (
            <li key={idx}>
              {item.title}: ${item.cost}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total Cost:</strong> ${offer.cost_sum}
        </p>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(
    `https://twin-code-corp-offers-ten.vercel.app/offers/${id}`,
  );
  if (!res.ok) {
    return { props: { offer: null } };
  }
  const offer = await res.json();
  return { props: { offer } };
};
