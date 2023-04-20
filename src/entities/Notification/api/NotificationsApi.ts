import { rtkApi } from 'shared/api/rtkApi';

import { Notification } from '../model/notification';

const NotificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            })
        })
    })
});

export const useGetNotifications = NotificationsApi.useGetNotificationsQuery;