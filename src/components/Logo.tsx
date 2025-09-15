import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-1 sm:gap-2 min-w-0">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 relative rounded-full overflow-hidden flex-shrink-0">
        <Image
          src="/logo.jpg"  // Replace with your actual logo file name
          alt="Raaga Foods Logo"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
          priority
        />
      </div>
      <div className="min-w-0 flex items-center">
        <img 
          src="/logoname.jpg"
          alt="Raaga Foods Name Logo"
          style={{ height: '20px', width: 'auto', maxWidth: '100%' }}
        />
      </div>
    </div>
  );
}
