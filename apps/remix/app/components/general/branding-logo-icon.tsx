import LogoImage from '@documenso/assets/logo.png';

export const BrandingLogoIcon = ({ className }: { className?: string }) => {
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
