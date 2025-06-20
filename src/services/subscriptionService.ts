import api from './api';

export interface Subscription {
  id: number;
  user_id: number;
  plan_type: 'basic' | 'premium';
  status: 'active' | 'cancelled' | 'expired';
  start_date: string;
  end_date: string;
}

export const subscriptionService = {
  // Get current user's subscription
  getCurrentSubscription: async () => {
    const response = await api.get<Subscription>('/subscription/current');
    return response.data;
  },

  // Subscribe to a plan
  subscribe: async (planType: 'basic' | 'premium') => {
    const response = await api.post<Subscription>('/subscription', { plan_type: planType });
    return response.data;
  },

  // Cancel subscription
  cancelSubscription: async () => {
    const response = await api.post<Subscription>('/subscription/cancel');
    return response.data;
  },

  // Get subscription history
  getSubscriptionHistory: async () => {
    const response = await api.get<Subscription[]>('/subscription/history');
    return response.data;
  }
}; 