interface GrayTextProps {
  label: string;
  color: string;
}

const GrayText: React.FC<GrayTextProps> = ({ label, color }) => {
  return (
    <span className={`bg-gray-200 text-${color}-600 rounded-md`}>{label}</span>
  );
};

export default GrayText;
