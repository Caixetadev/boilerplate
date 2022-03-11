import { withKnobs, text } from '@storybook/addon-knobs'
import { ComponentMeta, Story } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as ComponentMeta<typeof Main>

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'Typescript, ReactJS, NextJS e Styled Components'
    )}
  />
)
