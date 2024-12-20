import Styles from './Hero.module.css';

export default function VideoHero({
  height = '80vh',
  children,
  margin = false,
}) {
  return (
    <>
      {margin && <div style={{ height: '130px' }} />}
      <div className={Styles.VideoHero} style={{ height: `${height}` }}>
        <div className={Styles.VideoHero_VideoContainer}>
          <video className={Styles.VideoHero_Video} autoPlay loop muted>
            <source src="/video/pac-home-video-new.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={Styles.VideoHero_Overlay}>
          <div className={Styles.VideoHero_Overlay_Container}>
            <div className={Styles.VideoHero_Overlay_Container_Content}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
