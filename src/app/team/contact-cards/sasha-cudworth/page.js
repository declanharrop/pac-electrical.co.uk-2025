import Styles from '@/Styles/Pages/ContactCardPage.module.css';

export default function page() {
  return (
    <div className={Styles.ContactCard}>
      <div className={Styles.ContactCard__Container}>
        <div className={Styles.ContactCard__Container__Upper}>
          <img
            className={Styles.ContactCard__Container__Upper__ProfilePhoto}
            src="/images/team/ph.svg"
            alt="Sasha Cudworth"
          />
          <h2 className={Styles.ContactCard__Container__Upper__Name}>
            Sasha Cudworth
          </h2>
          <h4 className={Styles.ContactCard__Container__Upper__Job}>
            Office Manager
          </h4>
          <div className={Styles.ContactCard__Container__Upper__AddContact}>
            <a href="/data/contact-cards/sasha_cudworth.vcf" download>
              <button
                type="button"
                className={
                  Styles.ContactCard__Container__Upper__AddContact__Button
                }
              >
                <img
                  className={
                    Styles.ContactCard__Container__Upper__AddContact__Button__Icon
                  }
                  src="/icons/download.svg"
                  alt=""
                />
                Add to Contacts
              </button>
            </a>
          </div>
        </div>
        <div className={Styles.ContactCard__Container__Lower}>
          <div className={Styles.ContactCard__Container__Lower__Contact}>
            <div
              className={Styles.ContactCard__Container__Lower__Contact__Item}
            >
              <img
                className={
                  Styles.ContactCard__Container__Lower__Contact__Item__Icon
                }
                src="/icons/phone.svg"
                alt="Phone"
              />
              <div
                className={
                  Styles.ContactCard__Container__Lower__Contact__Item__Text
                }
              >
                <p
                  className={
                    Styles.ContactCard__Container__Lower__Contact__Item__Text__Title
                  }
                >
                  Phone
                </p>
                <a href="tel:+441332552320">
                  <h4
                    className={
                      Styles.ContactCard__Container__Lower__Contact__Item__Text__Content
                    }
                  >
                    +441332 552 320
                  </h4>
                </a>
              </div>
            </div>
            <div
              className={Styles.ContactCard__Container__Lower__Contact__Item}
            >
              <img
                className={
                  Styles.ContactCard__Container__Lower__Contact__Item__Icon
                }
                src="/icons/email.svg"
                alt="Email"
              />
              <div
                className={
                  Styles.ContactCard__Container__Lower__Contact__Item__Text
                }
              >
                <p
                  className={
                    Styles.ContactCard__Container__Lower__Contact__Item__Text__Title
                  }
                >
                  Email
                </p>
                <a href="mailto:sasha@pac-electrical.co.uk">
                  <h4
                    className={
                      Styles.ContactCard__Container__Lower__Contact__Item__Text__Content
                    }
                  >
                    sasha@pac-electrical.co.uk
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
