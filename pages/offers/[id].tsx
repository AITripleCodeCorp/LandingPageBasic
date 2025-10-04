import { GetServerSideProps } from "next";
import { useState, useEffect } from 'react';
import styles from "./OfferDetails.module.css";
import { useInView } from '../../hooks/useInView';

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
  language: 'pl' | 'eng';
  currency: string;
};

const translations = {
  eng: {
    client: 'Client',
    schedule: 'Schedule',
    costs: 'Costs',
    item: 'Item',
    cost: 'Cost',
    sum: 'Sum',
    totalProjectCost: 'Total Project Cost',
    offerNotFound: 'Offer not found',
    days: 'days',
  },
  pl: {
    client: 'Klient',
    schedule: 'Harmonogram',
    costs: 'Koszty',
    item: 'Pozycja',
    cost: 'Koszt',
    sum: 'Suma',
    totalProjectCost: 'Całkowity koszt projektu',
    offerNotFound: 'Oferta nie znaleziona',
    days: 'dni',
  }
};

export default function OfferDetails({ offer }: { offer: Offer }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lang = offer.language === 'pl' ? 'pl' : 'eng';
  const t = translations[lang];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [scheduleRef, scheduleInView] = useInView({ threshold: 0.2 });
  const [costsRef, costsInView] = useInView({ threshold: 0.2 });
  const [totalRef, totalInView] = useInView({ threshold: 0.2 });

  // Helper to get locale for numbers
  const numberLocale = lang === 'pl' ? 'pl-PL' : 'en-US';

  if (!offer) return (
    <div className={styles.pageBackground}>
      <div className={styles.container}>
        <div className={styles.notFound}>{translations.eng.offerNotFound}</div>
      </div>
    </div>
  );

  return (
    <div className={styles.pageBackground}>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={
            styles.header + ' ' + styles.fadeUpInit + (headerInView ? ' ' + styles.fadeUpIn : '')
          }
        >
          <div className={styles.headerGradientBar}></div>
          <h1 className={styles.title}>{offer.header}</h1>
          <p className={styles.clientName}>{t.client}: {offer.client_name}</p>
          <span className={styles.headerDate}>{formatDate(offer.created_at)}</span>
          <p className={styles.description}>{offer.description}</p>
        </div>

        <div className={styles.sectionsContainer} style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '40px' }}>
          {/* Schedule as vertical timeline */}
          <div
            ref={scheduleRef}
            className={
              styles.section + ' ' + styles.fadeUpInit + (scheduleInView ? ' ' + styles.fadeUpIn : '')
            }
          >
            <h2 className={styles.sectionTitle}>
              <div className={`${styles.sectionIcon} ${styles.schedule}`}></div>
              {t.schedule}
            </h2>
            <div className={styles.timeline}>
              {offer.schedule_items.map((item, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineTitle}>{item.title}</div>
                    <div className={styles.timelineDuration}>{item.day_duration} {t.days}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Costs as table */}
          <div
            ref={costsRef}
            className={
              styles.section + ' ' + styles.fadeUpInit + (costsInView ? ' ' + styles.fadeUpIn : '')
            }
          >
            <h2 className={styles.sectionTitle}>
              <div className={`${styles.sectionIcon} ${styles.costs}`}></div>
              {t.costs}
            </h2>
            <div className={styles.costTableWrapper}>
              <table className={styles.costTable}>
                <thead>
                  <tr>
                    <th>{t.item}</th>
                    <th>{t.cost} ({offer.currency})</th>
                  </tr>
                </thead>
                <tbody>
                  {offer.cost_items.map((item, idx) => (
                    <tr key={idx}>
                      <td className={styles.costTitle}>{item.title}</td>
                      <td className={styles.costValue}>{item.cost.toLocaleString(numberLocale)} {offer.currency}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className={styles.costTitle} style={{ fontWeight: 700 }}>{t.sum}</td>
                    <td className={styles.costValue} style={{ fontWeight: 700 }}>{offer.cost_sum.toLocaleString(numberLocale)} {offer.currency}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        <div
          ref={totalRef}
          className={
            styles.totalSection + ' ' + styles.fadeUpInit + (totalInView ? ' ' + styles.fadeUpIn : '')
          }
        >
          <div className={styles.totalLabel}>{t.totalProjectCost}</div>
          <div className={styles.totalAmount}>{offer.cost_sum.toLocaleString(numberLocale)} {offer.currency}</div>
        </div>
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
