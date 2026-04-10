export default function BackgroundGradients() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[#020617]" />
      {/* Rotated blurred gradient rectangle */}
      <div 
        className="absolute"
        style={{
          width: '467px',
          height: '1297.53px',
          left: '-242px',
          top: '411px',
          background: 'linear-gradient(270deg, rgba(34, 1, 220, 0.27) 0%, rgba(18, 0, 118, 0.27) 100%)',
          filter: 'blur(150px)',
          borderRadius: '233.5px',
          transform: 'rotate(-54.37deg)'
        }}
      />
      {/* Top right blurred gradient */}
      <div 
        className="absolute"
        style={{
          width: '303px',
          height: '303px',
          left: '1127px',
          top: '-5px',
          background: 'rgba(34, 1, 220, 0.3)',
          filter: 'blur(125px)'
        }}
      />
      {/* Bottom left gradient */}
      <div 
        className="absolute"
        style={{
          width: '400px',
          height: '400px',
          left: '-200px',
          bottom: '-150px',
          background: 'linear-gradient(270deg, rgba(34, 1, 220, 0.27) 0%, rgba(18, 0, 118, 0.27) 100%)',
          filter: 'blur(150px)'
        }}
      />
    </div>
  );
}

