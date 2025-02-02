import React, { ComponentProps } from 'react'

import { CenteredText } from './blocks/CenteredText'
import { Header } from './blocks/Header'
import { LatestNews } from './blocks/LatestNews'
import { PushCTA } from './blocks/PushCTA'
import { SimpleText } from './blocks/SimpleText'
import { SocialMedia } from './blocks/SocialMedia'
import { VerticalCarousel } from './blocks/verticalCarousel/VerticalCarousel'
import { UnkwnownBlock } from './UnknownBlock'

export interface Block {
  __component: string
}

interface BlockRendererProps {
  block: Block
}

const COMPONENTS: Record<
  string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (props: ComponentProps<any>) => React.JSX.Element
> = {
  'block.header': Header,
  'block.centered-text': CenteredText,
  'block.simple-text': SimpleText,
  'block.push-cta': PushCTA,
  'block.social-media': SocialMedia,
  'block.latest-news': LatestNews,
  'block.vertical-carousel': VerticalCarousel,
}

export function BlockRenderer(props: BlockRendererProps) {
  const BlockComponent = COMPONENTS[props.block.__component]

  if (!BlockComponent) {
    return <UnkwnownBlock block={props.block} />
  }

  return <BlockComponent {...props.block} />
}
