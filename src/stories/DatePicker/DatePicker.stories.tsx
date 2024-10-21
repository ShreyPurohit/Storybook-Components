import { Meta, StoryObj } from "@storybook/react";
import DatePicker from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
    title: 'Components/DatePicker',
    component: DatePicker,
    argTypes: {
        disabled: {
            control: 'boolean'
        },
        theme: {
            control: "inline-radio",
            options: ['light', 'dark']
        },
        withActionButtons: {
            control: 'boolean'
        },
        withTimePicker: {
            control: 'boolean'
        }
    }
}

export default meta

type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
    args: {
        onChange: (date) => console.log(date),
        value: '',
        withTimePicker: false,
        theme: 'light',
        withActionButtons: false,
        disabled: false,
    }
}