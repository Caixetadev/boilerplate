import { ComponentMeta, Story } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>

export const Basic: Story = (args) => <Main {...args} />
