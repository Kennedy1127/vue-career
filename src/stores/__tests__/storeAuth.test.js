import { setActivePinia, createPinia } from 'pinia';
import { describe, it, beforeEach, expect } from 'vitest';
import { useStoreAuth } from '@/stores/storeAuth';

describe('useStoreAuth', () => {
  let storeAuth;

  beforeEach(() => {
    setActivePinia(createPinia());
    storeAuth = useStoreAuth();
  });

  describe('state', () => {
    it('check isLoggedIn', () => {
      expect(storeAuth.isLoggedIn).toBe(false);
    });
  });

  describe('action', () => {
    it('user login', () => {
      storeAuth.userLogin();
      expect(storeAuth.isLoggedIn).toBe(true);
    });
  });
});
