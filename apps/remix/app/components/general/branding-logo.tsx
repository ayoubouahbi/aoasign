import LogoImage from '@documenso/assets/logo.png';

export const BrandingLogo = ({ className }: { className?: string }) => {
  return (
    <img
      src={LogoImage}
      alt="AOASIGN"
      className={className}
      width={170}
      height={25}
    />
  );
};
