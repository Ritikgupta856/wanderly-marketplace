'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItems from './MenuItems';

import { signOut } from 'next-auth/react';

import { useRouter } from 'next/navigation';
import { SafeUser } from '@/app/types';
import ClickAwayListener from 'react-click-away-listener';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRentModal from '@/app/hooks/useRentModal';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClickAway = () => {
    setIsOpen(false);
  };

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
        >
          Add your home
        </div>
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu size={18} />

          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
            <div className="flex cursor-pointer flex-col">
              {currentUser ? (
                <>
                  <MenuItems onClick={() => router.push(`/trips`)} label="My trips" />
                  <MenuItems onClick={() => router.push(`/favorites`)} label="My Favorites" />
                  <MenuItems
                    onClick={() => {
                      router.push(`/properties`);
                    }}
                    label="My properties"
                  />

                  <div className="md:hidden">
                    <MenuItems onClick={onRent} label="Airbnb my home" />
                  </div>

                  <hr />
                  <MenuItems onClick={() => signOut()} label="Logout" />
                </>
              ) : (
                <>
                  <MenuItems onClick={loginModal.onOpen} label="Login" />
                  <MenuItems onClick={registerModal.onOpen} label="Sign up" />
                </>
              )}
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default UserMenu;
