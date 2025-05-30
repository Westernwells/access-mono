import React from 'react';
import {Box} from '@/components/ui/box';
import {Heading} from '@/components/ui/heading';
import PageLayout from '@/components/layouts/PageLayout';
import {FlatList} from 'react-native';
import NotificationCard from './NotificationCard';

function classifyNotificationDate(timestamp: string): string {
  const now = new Date();
  const notificationDate = new Date(timestamp);
  const diffInMs = now.getTime() - notificationDate.getTime();
  const diffInHours = diffInMs / (1000 * 60 * 60);

  if (diffInHours <= 6) {
    return 'New';
  } else if (diffInHours <= 24) {
    return 'Today';
  } else if (diffInHours <= 48) {
    return 'Yesterday';
  } else {
    return notificationDate
      .toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
      .replace(',', ' at'); // Format as 'Mon, 12 at 12:12 PM'
  }
}

function formatTimestamp(timestamp: string): string {
  const notificationDate = new Date(timestamp);
  return notificationDate
    .toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    .replace(',', ' at'); // Format as 'Mon, 12 at 12:12 PM'
}

const NotificationsScreen = () => {
  const notifications = React.useMemo(() => {
    const rawNotifications = [
      {
        title: 'Missed Call from Lobby Intercom',
        time: '2025-05-13T08:45:00Z',
        ago: '2 min ago',
        type: 'missed' as const,
      },
      {
        title: 'Call Answered',
        time: '2025-05-15T01:15:00Z',
        ago: '1 hour ago',
        type: 'answered' as const,
      },
      {
        title: 'System Maintenance Notice',
        time: '2025-05-12T15:00:00Z',
        ago: '10 hours ago',
        type: 'answered' as const,
      },
      {
        title: 'Water Supply Notice',
        time: '2025-05-11T10:00:00Z',
        ago: '10 hours ago',
        type: 'answered' as const,
      },
    ];

    const groupedNotifications: Record<string, typeof rawNotifications> = {};

    rawNotifications.forEach(notification => {
      const category = classifyNotificationDate(notification.time);
      if (!groupedNotifications[category]) {
        groupedNotifications[category] = [];
      }
      groupedNotifications[category].push(notification);
    });

    return Object.entries(groupedNotifications).map(([date, data]) => ({
      date,
      data,
    }));
  }, []);

  return (
    <PageLayout title="Notifications" disableScroll={true}>
      <Box className="flex-1 px-4 sm:px-6 md:px-10 mt-4">
        <FlatList
          data={notifications}
          keyExtractor={item => item.date}
          renderItem={({item: section}) => (
            <Box key={section.date} className="mb-6">
              <Heading className="text-typography-500 mb-2 text-lg " size="sm">
                {section.date}
              </Heading>
              {section.data.map((notification, index) => (
                <NotificationCard
                  key={index}
                  title={notification.title}
                  time={formatTimestamp(notification.time)}
                  ago={notification.ago}
                  type={notification.type}
                />
              ))}
            </Box>
          )}
          contentContainerStyle={{paddingBottom: 16, paddingTop: 8}}
        />
      </Box>
    </PageLayout>
  );
};

export default NotificationsScreen;
