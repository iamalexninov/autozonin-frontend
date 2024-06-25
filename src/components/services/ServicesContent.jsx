export const ServicesContent = () => {
  return (
    <div>
      <div>
        <h3>
          Your One Stop Destination for Vehicles Sales and Rentals.
        </h3>
        <p>
          Explore our diverse selection of vehicles for sale and discover
          hassle-free car shopping. Whether you`re buying, selling, or browsing,
          find the perfect ride with us today.
        </p>
        <ServicesFeaturesRecords records={features} />
        <button className={styles.content_info_btn}>
          <p>Get Started</p>
          <GlobalIcon type="arrowRightInline" />
        </button>
      </div>
    </div>
  );
};

const Cont