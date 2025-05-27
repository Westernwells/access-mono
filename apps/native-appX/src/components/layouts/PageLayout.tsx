import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
import {Box} from '@/components/ui/box';
import {Heading} from '@/components/ui/heading';
import {cn} from '@/lib/utils';

type PageLayoutProps = {
  children: ReactNode;
  title?: string;
  safePadding?: boolean;
  safePaddingTop?: boolean;
  disableScroll?: boolean;
};

const PageLayout = ({
  children,
  title,
  safePadding = true, // set safePadding to totally remove the safePadding
  safePaddingTop = true, // set safePaddingTop to false for screens with a CustomHeader
  disableScroll = false,
}: PageLayoutProps) => {
  const Container = disableScroll ? View : ScrollView;

  return (
    <Container
      className="bg-background-0 flex-1 relative"
      contentContainerClassName={disableScroll ? undefined : 'flex-grow'}>
      <Box
        className={cn(
          'flex-1',
          safePaddingTop && safePadding && 'pt-safe',
          safePadding && 'px-safe pb-safe',
        )}>
        {title && (
          <Heading className="text-center font-bold mb-12 mt-4" size="2xl">
            {title}
          </Heading>
        )}
        {children}
      </Box>
    </Container>
  );
};

export default PageLayout;
