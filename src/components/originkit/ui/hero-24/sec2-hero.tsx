import { MediaGlobe } from "./media-globe";
import { ScaleFrame } from "./scale-frame";

const A = "/originkit/hero-24";

const HERO_TEXT = {
  fr: {
    greeting: "Bonjour !",
    line1: "Je suis",
    line2: "Jean-Barron,",
    role: "Développeur Frontend",
    statValue: "+4 ans",
    statLabel: "Expérience en Dev Web",
    cta1: "Voir mes projects",
    cta2: "Me contacter",
    testimonial: "\"J'ai grave aimé, surtout ta rapidité à livrer.\"",
    author: "Yousra Bendida",
  },
  en: {
    greeting: "Hello!",
    line1: "I'm",
    line2: "Jean-Barron,",
    role: "Frontend Developer",
    statValue: "+4 yrs",
    statLabel: "Web Dev Experience",
    cta1: "View my projects",
    cta2: "Contact me",
    testimonial: "\"I loved it, especially how quickly you delivered.\"",
    author: "Yousra Bendida",
  },
};

const REVEAL = "animate-hero-reveal";
const delay = (ms) => ({ animationDelay: `${ms}ms` });

const Backdrop = ({ src, className }) => (
  <img
    alt=""
    aria-hidden
    className={`pointer-events-none absolute left-0 top-0 h-full min-h-screen w-full max-w-none object-cover ${className}`}
    src={`${A}/${src}`}
  />
);

const GetStartedButton = ({ className, label }) => (
  <a
    href="#portfolio"
    className={`relative flex shrink-0 cursor-pointer items-center justify-center rounded-[999px] transition-opacity duration-200 hover:opacity-80 drop-shadow-[0px_53px_7.5px_rgba(0,0,0,0),0px_34px_7px_rgba(0,0,0,0.01),0px_19px_6px_rgba(0,0,0,0.05),0px_9px_4.5px_rgba(0,0,0,0.09),0px_2px_2.5px_rgba(0,0,0,0.1)] ${className}`}
    style={{ fontFamily: '"Manrope", sans-serif' }}
  >
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[999px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255, 138, 61, 0.33) 0%, rgba(255, 138, 61, 0) 100%), linear-gradient(90deg, rgb(255, 138, 61) 0%, rgb(255, 138, 61) 100%)",
      }}
    />
    <p className="relative shrink-0 whitespace-nowrap text-[16px] leading-[1.15] tracking-[-0.32px] text-white">
      {label}
    </p>
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px rgba(255,255,255,0.4),inset_0px_-1.5px_0px_0px_rgba(0,0,0,0.1)]" />
  </a>
);

const EDGE_FADE = {
  left: "linear-gradient(to right, transparent 0%, #000 18%, #000 100%)",
  right: "linear-gradient(to left, transparent 0%, #000 18%, #000 100%)",
};

const HAND_SLIDE = {
  left: "animate-hand-slide-in-left",
  right: "animate-hand-slide-in-right",
};

const HandCutout = ({
  box,
  mask,
  maskSize,
  image,
  from,
  step,
}) => (
  <div
    className={`absolute ${HAND_SLIDE[from]} ${box}`}
    style={{
      ...delay(step),
      maskImage: `url("${A}/${mask}"), ${EDGE_FADE[from]}`,
      WebkitMaskImage: `url("${A}/${mask}"), ${EDGE_FADE[from]}`,
      maskMode: "alpha",
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskSize: `${maskSize}, 100% 100%`,
      WebkitMaskSize: `${maskSize}, 100% 100%`,
    }}
  >
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <img alt="" className={`absolute max-w-none ${image}`} src={`${A}/hands.png`} />
    </div>
  </div>
);

const GlassCard = ({
  className,
  plate,
  step,
  children,
}) => (
  <div
    className={`absolute flex flex-col items-start overflow-clip border-solid border-[rgba(255,255,255,0.1)] backdrop-blur-sm ${className}`}
  >
    <div
      className={`absolute h-[166px] w-[301px] -translate-x-1/2 -translate-y-1/2 blur-[20px] ${plate}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[2px]"
      />
    </div>
    {children}
  </div>
);

/* ==================== SHARED COPY ==================== */

const HeroCopy = ({ t, phone = false }) => (
  <>
    <p
      style={delay(40)}
      className={`${REVEAL} relative shrink-0 text-[12px] leading-[1.4] text-[rgba(255,138,61,0.9)] tracking-[0.15em] uppercase ${phone ? "w-[320px]" : "w-full"}`}
    >
      {t.greeting}
    </p>
    <h1
      style={{ ...delay(80), fontFamily: '"Syne", sans-serif', fontWeight: 800 }}
      className={`${REVEAL} relative shrink-0 text-[32px] leading-[38px] tracking-[-1.2px] ${phone ? "w-[370px]" : "w-full"}`}
    >
      {t.line1}<br />
      {t.line2}<br />
      <span className="text-[#ff8a3d]">{t.role}</span>
    </h1>
  </>
);

const HeroCTAs = ({ t, phone = false, wide = false }) => (
  <>
    <GetStartedButton className={phone ? "w-full px-[24px] py-[14px]" : wide ? "px-[24px] py-[16px]" : "px-[24px] py-[16px]"} label={t.cta1} />
    <a
      href="#contact"
      className={`relative flex shrink-0 cursor-pointer items-center justify-center rounded-[999px] border border-solid border-[rgba(255,255,255,0.1)] bg-[#252525] transition-opacity duration-200 hover:opacity-80 ${phone ? "w-full px-[24px] py-[14px]" : "px-[24px] py-[16px]"}`}
    >
      <p className="relative shrink-0 whitespace-nowrap text-[16px] leading-[1.15] tracking-[-0.32px] text-white" style={{ fontFamily: '"Manrope", sans-serif' }}>
        {t.cta2}
      </p>
    </a>
  </>
);

const StatCard = ({ t, className, plate, step, textSize = 16, subTextSize = 12 }) => (
  <GlassCard className={className} plate={plate} step={step}>
    <p className={`relative w-full shrink-0 font-bold italic leading-[1.4] text-white`} style={{ fontSize: `${textSize}px` }}>
      {t.statValue}
    </p>
    <p className={`relative w-full shrink-0 leading-[1.4] text-white opacity-70`} style={{ fontSize: `${subTextSize}px` }}>
      {t.statLabel}
    </p>
  </GlassCard>
);

const TestimonialCard = ({ t, className, plate, step, avatarSize = 32, quoteSize = 14, nameSize = 12 }) => (
  <GlassCard className={className} plate={plate} step={step}>
    <p className="relative w-full shrink-0 leading-[1.4] text-white" style={{ fontSize: `${quoteSize}px` }}>
      {t.testimonial}
    </p>
    <div className="relative flex w-full shrink-0 items-center gap-[6px]">
      <div className="relative shrink-0 rounded-full overflow-hidden" style={{ width: `${avatarSize}px`, height: `${avatarSize}px` }}>
        <img
          alt=""
          className="absolute inset-0 block size-full max-w-none object-cover"
          height={avatarSize}
          width={avatarSize}
          src={`${A}/avatar.png`}
        />
      </div>
      <div className="relative flex shrink-0 flex-col items-start leading-[1.3] text-white" style={{ fontSize: `${nameSize}px` }}>
        <p className="relative w-full shrink-0 font-bold italic">{t.author}</p>
      </div>
    </div>
  </GlassCard>
);

/* ==================== PHONE ==================== */

const PhoneFrame = ({ t }) => (
  <div className="relative h-[836px] w-[402px] overflow-clip">
    {/* Copy */}
    <div className="absolute left-1/2 top-[100px] flex w-[370px] -translate-x-1/2 flex-col items-center gap-[24px]">
      <div className="relative flex w-full shrink-0 flex-col items-center gap-[8px] text-center text-white">
        <HeroCopy t={t} phone />
      </div>
      <div
        style={delay(240)}
        className={`${REVEAL} relative flex w-full shrink-0 flex-col items-start justify-center gap-[8px]`}
      >
        <HeroCTAs t={t} phone />
      </div>
    </div>

    {/* Globe */}
    <div style={delay(320)} className={`${REVEAL} absolute left-[calc(50%+0.5px)] top-[418px] h-[324px] w-[323px] -translate-x-1/2 overflow-clip rounded-[999px]`}>
      <MediaGlobe />
    </div>

    <HandCutout
      box="left-[172px] top-[344.46px] h-[177.31px] w-[230px]"
      mask="hand-mask-top.svg"
      maskSize="230px 177.309px"
      image="left-[-97.68%] top-[-17.2%] h-[170.95%] w-[197.68%]"
      from="right"
      step={360}
    />

    <HandCutout
      box="left-[-27px] top-[571.65px] h-[212.8px] w-[224px]"
      mask="hand-mask-bottom.svg"
      maskSize="224px 212.801px"
      image="left-[-15.3%] top-[-63.32%] h-[163.32%] w-[232.73%]"
      from="left"
      step={440}
    />

    <StatCard t={t} className="left-[20px] top-[445px] w-[136px] gap-[4px] rounded-[6px] border p-[12px]" plate="left-[calc(50%-0.5px)] top-[calc(50%+0.5px)]" step={400} textSize={16} subTextSize={12} />
    <TestimonialCard t={t} className="left-[calc(50%+79px)] top-[667px] w-[212px] -translate-x-1/2 gap-[12px] rounded-[4.729px] border-[0.788px] p-[12px]" plate="left-[calc(50%+25.5px)] top-[calc(50%+4.21px)]" step={480} avatarSize={28} quoteSize={12} nameSize={11} />
  </div>
);

/* ==================== TABLET ==================== */

const TabletFrame = ({ t }) => (
  <div className="relative h-[994px] w-[744px] overflow-clip">
    {/* Top Nav */}
    <div
      style={delay(0)}
      className={`${REVEAL} absolute left-0 top-0 flex h-[64px] w-[744px] items-center justify-center border border-solid border-[rgba(255,255,255,0.1)] px-[32px] py-[16px]`}
    >
      <div className="relative flex min-w-px flex-[1_0_0] items-center justify-between">
        <a href="#home" className="relative shrink-0 whitespace-nowrap text-[28px] leading-[1.15] tracking-[-0.84px] text-white" style={{ fontFamily: '"Syne", sans-serif', fontWeight: 700 }}>
          JeanBarron
        </a>
        <div className="relative size-[24px] shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-70">
          <img alt="Menu" className="absolute inset-0 block size-full max-w-none" src={`${A}/menu.svg`} />
        </div>
      </div>
    </div>

    {/* Copy */}
    <div className="absolute left-[149px] top-[120px] flex w-[446px] flex-col items-center gap-[32px]">
      <div className="relative flex w-full shrink-0 flex-col items-center gap-[16px] text-center text-white">
        <HeroCopy t={t} />
      </div>
      <div
        style={delay(240)}
        className={`${REVEAL} relative flex shrink-0 items-center gap-[12px]`}
      >
        <HeroCTAs t={t} wide />
      </div>
    </div>

    {/* Globe */}
    <div style={delay(320)} className={`${REVEAL} absolute left-[163px] top-[432px] h-[420px] w-[418px] overflow-clip rounded-[999px]`}>
      <MediaGlobe />
    </div>

    <HandCutout
      box="left-[401px] top-[383.289px] h-[264.423px] w-[343px]"
      mask="ipad-mask-top.svg"
      maskSize="343px 264.423px"
      image="left-[-97.68%] top-[-17.2%] h-[170.95%] w-[197.68%]"
      from="right"
      step={360}
    />

    <HandCutout
      box="left-0 top-[692.875px] h-[267.9px] w-[282px]"
      mask="ipad-mask-bottom.svg"
      maskSize="282px 267.9px"
      image="left-[-15.3%] top-[-63.32%] h-[163.32%] w-[232.73%]"
      from="left"
      step={440}
    />

    <StatCard t={t} className="left-[113px] top-[473px] w-[169px] gap-[4px] rounded-[6px] border p-[16px]" plate="left-1/2 top-1/2" step={400} textSize={20} subTextSize={14} />
    <TestimonialCard t={t} className="left-[441px] top-[740px] w-[246px] gap-[16px] rounded-[6px] border p-[14px]" plate="left-[calc(50%-0.5px)] top-1/2" step={480} avatarSize={32} quoteSize={14} nameSize={12} />
  </div>
);

/* ==================== DESKTOP ==================== */

const DesktopFrame = ({ t }) => (
  <div className="relative h-[913px] w-[1280px] overflow-clip">
    {/* Copy */}
    <div className="absolute left-[417px] top-[144px] flex w-[446px] flex-col items-center gap-[32px]">
      <div className="relative flex w-full shrink-0 flex-col items-center gap-[16px] text-center text-white">
        <HeroCopy t={t} />
      </div>
      <div
        style={delay(240)}
        className={`${REVEAL} relative flex shrink-0 items-center gap-[12px]`}
      >
        <HeroCTAs t={t} wide />
      </div>
    </div>

    {/* Globe */}
    <div style={delay(320)} className={`${REVEAL} absolute left-[431px] top-[448px] h-[420px] w-[418px] overflow-clip rounded-[999px]`}>
      <MediaGlobe />
    </div>

    <HandCutout
      box="left-[794px] top-[269.169px] h-[374.664px] w-[486px]"
      mask="desk-mask-top.svg"
      maskSize="486px 374.664px"
      image="left-[-97.68%] top-[-17.2%] h-[170.95%] w-[197.68%]"
      from="right"
      step={360}
    />

    <HandCutout
      box="left-0 top-[592.398px] h-[420.85px] w-[443px]"
      mask="desk-mask-bottom.svg"
      maskSize="443px 420.85px"
      image="left-[-15.3%] top-[-63.32%] h-[163.32%] w-[232.73%]"
      from="left"
      step={440}
    />

    <StatCard t={t} className="left-[339px] top-[504px] w-[169px] gap-[4px] rounded-[6px] border p-[16px]" plate="left-1/2 top-1/2" step={400} textSize={20} subTextSize={14} />
    <TestimonialCard t={t} className="left-[803px] top-[685px] w-[246px] gap-[16px] rounded-[6px] border p-[14px]" plate="left-[calc(50%-0.5px)] top-1/2" step={480} avatarSize={32} quoteSize={14} nameSize={12} />
  </div>
);

export const Sec2Hero = ({ locale = "fr" }) => {
  const t = HERO_TEXT[locale] || HERO_TEXT.fr;

  return (
    <main
      className="hero-24 relative w-full overflow-hidden bg-[#101216] pt-4"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <Backdrop src="bg.png" className="min-[640px]:hidden" />
      <Backdrop src="bg-ipad.png" className="hidden min-[640px]:block desktop-sm:hidden" />
      <Backdrop src="bg-desktop.png" className="hidden desktop-sm:block" />

      <ScaleFrame frameWidth={402} className="relative w-full overflow-hidden min-[640px]:hidden">
        <PhoneFrame t={t} />
      </ScaleFrame>
      <ScaleFrame
        frameWidth={744}
        className="relative hidden w-full overflow-hidden min-[640px]:block desktop-sm:hidden"
      >
        <TabletFrame t={t} />
      </ScaleFrame>
      <ScaleFrame
        frameWidth={1280}
        className="relative hidden w-full overflow-hidden desktop-sm:block"
      >
        <DesktopFrame t={t} />
      </ScaleFrame>
    </main>
  );
};
