import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react/types-6-0'

import Card from './Card'

export default {
  title: 'Example/Card',
  component: Card
}
const Template: Story<ComponentProps<typeof Card>> = (args: any) => (
  <Card {...args} />
)

export const FirstStory = Template.bind({})

FirstStory.args = {}
