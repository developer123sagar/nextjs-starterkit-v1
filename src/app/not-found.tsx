import { FlexColumn } from "@/components/common/Layout";

export default function PageNotFound() {
  return (
    <FlexColumn gap={3} className="h-screen w-full items-center justify-center">
      <h1 className="text-[6rem] text-primary-400">404</h1>
      <h6 className="text-primary-400">OOPS! PAGE NOT FOUND.</h6>
    </FlexColumn>
  );
}
