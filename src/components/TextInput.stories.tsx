import { Meta, StoryObj } from "@storybook/react";
import { Envelope, Lock } from "phosphor-react";
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input type={"email"} placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const EmailWithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input type={"email"} placeholder="Type your e-mail address" />
    ),
  },
};

export const PasswordInput: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Lock />
      </TextInput.Icon>,
      <TextInput.Input type={"password"} placeholder="Type your password" />,
    ],
  },
};

export const PasswordWithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input type={"password"} placeholder="Type your password" />
    ),
  },
};
