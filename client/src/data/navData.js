import { HomeIcon, CalendarDaysIcon, ClipboardDocumentCheckIcon, ShoppingCartIcon ,BellIcon, ClipboardDocumentIcon, UserPlusIcon } from "@heroicons/react/24/outline"

export const navData = [
    {
      title: 'Dashboard',
      path: '/',
      icon: ClipboardDocumentIcon,
      selected: false
    },
    {
      title: 'Properties',
      path: '/',
      icon: HomeIcon,
      selected: true
    },
    {
      title: 'Calendar',
      path: '/',
      icon: CalendarDaysIcon,
      selected: false
    },
    {
      title: 'My Clients',
      path: '/',
      icon: ClipboardDocumentCheckIcon,
      selected: false
    },
    {
      title: 'MLS Lists',
      path: '/',
      icon: ShoppingCartIcon,
      selected: false
    },
    {
      title: 'Notifications',
      path: '/',
      icon: BellIcon,
      selected: false
    },
    {
      title: 'Invite & Earn',
      path: '/',
      icon: UserPlusIcon,
      selected: false
    },
]