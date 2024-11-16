import Icon from "@/components/common/icon";
import IconButton from "@/components/common/icon-button";
import Spinner from "@/components/common/spinner";
import { Button } from "@/components/ui/button";

export default function Home() {
  const checked = true;

  return (
    <div className="container">
      <h2>Hello, It&apos;s a Next.js Starter kit v1</h2>
      <Icon name="close" />
      <IconButton
        name={checked ? "close" : "check_box_outline_blank"}
        className="h-8 w-8 text-blue-500"
      />
      <Spinner className="h-12 w-20" />
      <Button
        leftIcon="close"
        rightIcon="send"
        className="mt-4"
        withLoader
        isLoading
      >
        Submit
      </Button>
    </div>
  );
}
