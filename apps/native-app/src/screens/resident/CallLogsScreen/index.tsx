import React from 'react';
import {FlatList} from 'react-native';

import {Box} from '@/components/ui/box';

import PageLayout from '@/components/layouts/PageLayout';
import CallLogCard from './CallLogCard';
import CallLogsFilter, {CallTypes} from './CallLogsFilter';

const calls = [
  {
    type: CallTypes.ANSWERED,
    title: 'Call Answered Lobby Intercom',
    time: 'Feb 19 at 1:15 PM',
    unlocked: true,
    ago: '1 hour ago',
  },
  {
    type: CallTypes.MISSED,
    title: 'Missed Call from Lobby Intercom',
    time: 'Feb 18 at 10:45 AM',
    unlocked: false,
    ago: '1 hour ago',
  },
  {
    type: CallTypes.ANSWERED,
    title: 'Call Answered Lobby Intercom',
    time: 'Feb 15 at 1:15 PM',
    unlocked: true,
    ago: '1 hour ago',
  },
  {
    type: CallTypes.ANSWERED,
    title: 'Call Answered Lobby Intercom',
    time: 'Feb 14 at 1:15 PM',
    unlocked: false,
    ago: '1 hour ago',
  },
  {
    type: CallTypes.MISSED,
    title: 'Missed Call from Lobby Intercom',
    time: 'Feb 13 at 10:45 AM',
    unlocked: false,
    ago: '1 hour ago',
    recent: '2 min ago',
  },
];

export default function CallsLogsScreen() {
  const [activeTab, setActiveTab] = React.useState<CallTypes>(CallTypes.ALL);

  const filteredCalls = React.useMemo(() => {
    return calls.filter(
      call => activeTab === CallTypes.ALL || activeTab === call.type,
    );
  }, [activeTab]);

  const flatListRef = React.useRef<FlatList>(null);

  React.useEffect(() => {
    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  }, [activeTab]);

  return (
    <PageLayout disableScroll={true} title="CallLogs">
      <Box className="flex-1 px-4 sm:px-6 md:px-8 py-6 md:py-8">
        {/* Call Entries */}
        <FlatList
          ref={flatListRef}
          data={filteredCalls}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <CallLogCard
              title={item.title}
              type={item.type}
              time={item.time}
              unlocked={item.unlocked}
              recent={item.recent}
              ago={item.ago}
            />
          )}
          contentContainerStyle={{
            paddingBottom: 16,
            paddingTop: 8, // Add top padding here instead of in items
          }}
          ListHeaderComponent={
            <CallLogsFilter
              activeType={activeTab}
              onTypeChange={setActiveTab}
            />
          }
        />
      </Box>
    </PageLayout>
  );
}
