const FloatingDots = () => {
  const dots = [
    { top: "10%", left: "55%", size: 16, delay: 0 },
    { top: "15%", left: "62%", size: 12, delay: 0.5 },
    { top: "20%", left: "70%", size: 18, delay: 1 },
    { top: "30%", left: "58%", size: 10, delay: 1.5 },
    { top: "25%", left: "75%", size: 14, delay: 0.3 },
    { top: "40%", left: "65%", size: 16, delay: 0.8 },
    { top: "35%", left: "80%", size: 12, delay: 1.2 },
    { top: "50%", left: "72%", size: 18, delay: 0.6 },
    { top: "60%", left: "60%", size: 10, delay: 1.4 },
    { top: "55%", left: "82%", size: 14, delay: 0.2 },
    { top: "70%", left: "68%", size: 16, delay: 0.9 },
    { top: "65%", left: "78%", size: 12, delay: 1.1 },
  ];

  return (
    <div className="floating-dots hidden md:block">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="hero-dot animate-float"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;
