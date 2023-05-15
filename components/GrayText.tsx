import clsx from 'clsx'

interface GrayTextProps {
  label: string;
  color: 'blue' | 'green' | 'purple' | 'yellow'
}

const GrayText: React.FC<GrayTextProps> = ({ label, color }) => {

  const textColor = `text-${color}-500`
  return (
    <span color={color} 
    className={clsx("rounded-md",textColor,'bg-gray-200')}>{label}</span>
  );
};

export default GrayText;


// 'text-blue-500'
// 'text-purple-500'
// 'text-green-500'
// 'text-yellow-500'
