interface Props {
  errors: string[];
}

const ValidationError = ({ errors }: Props) => {
  return <h1>valiadtion errors</h1>;
};

export default ValidationError;
