import { Flex, Input, Select, Text, Textarea, Title } from "@mantine/core";

const ContactStack = () => {
  return (
    <div className="bg-black p-12  flex flex-row align-middle justify-center gap-2">
      <div className="text-white p-9 w-1/5 h-96 m-1">
        <div className=" m-5">
          <Title>INFORMATION</Title>
        </div>
        <div className="flex flex-row gap-4 m-5">
          <Text>Location:</Text>
          <Text>Ebu St, Alhaji - Accra, Ghana</Text>
        </div>
        <div className="flex flex-row gap-4 m-5">
          <Text>Email:</Text>
          <Text>sandraeyeboahgmail.com</Text>
        </div>
        <div className="flex flex-row gap-4 m-5">
          <Text>Telephone:</Text>
          <Text>+233 123 456 789</Text>
        </div>
      </div>
      <div className="text-white p-9 w-2/5 h-96 m-3">
        <div className="mb-8">
          <Title>KEEP IN TOUCH</Title>
        </div>
        <form>
          <div className="flex flex-row gap-2 my-5 w-full">
            <Input
              placeholder="Full name"
              size="lg"
              radius="xs"
              width={"50%"}
            />
            <Input placeholder="E-mail" size="lg" radius="xs" width={"50%"} />
          </div>
          <div className="flex flex-row gap-2 my-5">
            <Input placeholder="Phone number" size="lg" radius="xs" />
            <Select
              placeholder="Pick service"
              data={[
                "Hair cut",
                "Hair Dressing",
                "Wig making & styling",
                "Makeup",
                "Pedicure and lash",
                "Sales",
              ]}
              size="lg"
              radius="xs"
            />
          </div>
          <Textarea placeholder="Message" size="lg" radius="xs" />
          <button
            key={"submit"}
            className="bg-yellow-700 border-0 rounded-full text-white hover:bg-slate-400 my-4 px-5 py-3"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactStack;
