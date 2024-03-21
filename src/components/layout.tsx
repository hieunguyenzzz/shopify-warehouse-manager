'use client'
import {
  ActionList,
  Box,
  ContextualSaveBar,
  FormLayout,
  Frame,
  Loading,
  Modal,
  Navigation,
  TextField,
  Toast,
  TopBar
} from '@shopify/polaris';
import {
  HomeIcon,
  OrderIcon
} from '@shopify/polaris-icons';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';

function BaseLayout({ children }: { children: React.ReactNode }) {
  const defaultState = useRef({
    emailFieldValue: 'dharma@jadedpixel.com',
    nameFieldValue: 'SoundboxStore',
  });
  const skipToContentRef = useRef<HTMLAnchorElement>(null);

  const [toastActive, setToastActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [nameFieldValue, setNameFieldValue] = useState(
    defaultState.current.nameFieldValue,
  );
  const [emailFieldValue, setEmailFieldValue] = useState(
    defaultState.current.emailFieldValue,
  );
  const [storeName, setStoreName] = useState(
    defaultState.current.nameFieldValue,
  );
  const [supportSubject, setSupportSubject] = useState('');
  const [supportMessage, setSupportMessage] = useState('');

  const handleSubjectChange = useCallback(
    (value: string) => setSupportSubject(value),
    [],
  );
  const handleMessageChange = useCallback(
    (value: string) => setSupportMessage(value),
    [],
  );
  const handleDiscard = useCallback(() => {
    setEmailFieldValue(defaultState.current.emailFieldValue);
    setNameFieldValue(defaultState.current.nameFieldValue);
    setIsDirty(false);
  }, []);
  const handleSave = useCallback(() => {
    defaultState.current.nameFieldValue = nameFieldValue;
    defaultState.current.emailFieldValue = emailFieldValue;

    setIsDirty(false);
    setToastActive(true);
    setStoreName(defaultState.current.nameFieldValue);
  }, [emailFieldValue, nameFieldValue]);
  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue('');
  }, []);
  const handleSearchFieldChange = useCallback((value: string) => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);
  const toggleToastActive = useCallback(
    () => setToastActive((toastActive) => !toastActive),
    [],
  );
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    [],
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );
  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    [],
  );

  const toastMarkup = toastActive ? (
    <Toast onDismiss={toggleToastActive} content="Changes saved" />
  ) : null;

  const userMenuActions = [
    {
      items: [{ content: 'Community forums' }],
    },
  ];

  const contextualSaveBarMarkup = isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
      }}
      discardAction={{
        onAction: handleDiscard,
      }}
    />
  ) : null;

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Guest"
      initials="G"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[{ content: 'Shopify help center' }, { content: 'Community forums' }]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Search"
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );
  const router = useRouter()
  const pathName = usePathname()
  console.log({ pathName })
  let paths = pathName.split('/')
  const navigationMarkup = (
    <Navigation location={pathName} >
      <Navigation.Section
        items={[
          {
            label: 'Home',
            selected: paths[1] === '',
            url: '/',
            icon: HomeIcon,
            onClick: () => router.push('/'),
          },
          {
            label: 'Transfers',
            url: '/transfers',
            selected: paths[1] === 'transfers',
            icon: OrderIcon,
            onClick: () => router.push('/transfers'),
          },
          {
            label: 'Inventory',
            url: '/inventory',
            selected: paths[1] === 'inventory',
            icon: OrderIcon,
            onClick: () => router.push('/inventory'),
          },
        ]}

      />
    </Navigation>
  );

  const loadingMarkup = isLoading ? <Loading /> : null;



  const modalMarkup = (
    <Modal
      open={modalActive}
      onClose={toggleModalActive}
      title="Contact support"
      primaryAction={{
        content: 'Send',
        onAction: toggleModalActive,
      }}
    >
      <Modal.Section>
        <FormLayout>
          <TextField
            label="Subject"
            value={supportSubject}
            onChange={handleSubjectChange}
            autoComplete="off"
          />
          <TextField
            label="Message"
            value={supportMessage}
            onChange={handleMessageChange}
            autoComplete="off"
            multiline
          />
        </FormLayout>
      </Modal.Section>
    </Modal>
  );

  const logo = {
    width: 100,
    topBarSource:
      'https://soundboxstore.com/cdn/shop/files/SBS-new-logo_3baeb998-6906-4e10-bc25-c48bbe52d033_280x@2x.png?v=1698331081',
    contextualSaveBarSource:
      'https://soundboxstore.com/cdn/shop/files/SBS-new-logo_3baeb998-6906-4e10-bc25-c48bbe52d033_280x@2x.png?v=1698331081',
    accessibilityLabel: 'SounboxStore App',
  };

  return (
    <Frame
      logo={logo}
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
      skipToContentTarget={skipToContentRef}
    >
      {contextualSaveBarMarkup}
      {loadingMarkup}
      {children}
      {toastMarkup}
      {modalMarkup}
      <Box padding="1000">
      </Box>
    </Frame>
  );
}

export default BaseLayout;