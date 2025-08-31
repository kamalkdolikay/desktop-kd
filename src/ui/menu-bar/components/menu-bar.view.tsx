import { memo } from 'react';
import useMenuKeyNavigation from '@/hooks/menu-key-navigation.hook';
import useDropdownKeyNavigation from '@/hooks/dropdown-key-navigation.hook';
import styles from '../styles/menu-bar.module.css';
import type { MenuBarViewProps } from '../interface/menu-bar.interface';
import { MENU_ITEMS } from '../constants/menu-bar.constants';

const MenuBarView: React.FC<MenuBarViewProps> = ({
  activeMenu,
  toggleMenu,
  menuRefs,
  closeMenu,
  currentTime,
  changeBackground,
}) => {
  const handleKeyDown = useMenuKeyNavigation(toggleMenu);
  const handleDropdownKeyDown = useDropdownKeyNavigation(
    changeBackground,
    closeMenu,
  );

  return (
    <nav
      className={`${styles['menu-bar']} flex-row`}
      aria-label="Main navigation"
    >
      <div className={styles['menu-bar__menu']}>
        {MENU_ITEMS.map(({ name, items }) => (
          <div
            key={name}
            className={`${styles['menu-bar__item']} ${activeMenu === name ? styles.open : ''}`}
            data-menu={name}
            ref={(el) => {
              menuRefs.current[name] = el;
            }}
            onClick={() => toggleMenu(name)}
            onMouseEnter={() => {
              if (activeMenu && activeMenu !== name) toggleMenu(name);
            }}
            onKeyDown={(e) => handleKeyDown(e, name)}
            role="button"
            tabIndex={0}
            aria-expanded={activeMenu === name}
            aria-haspopup="true"
          >
            <span className={styles['menu-bar__label']}>{name}</span>
            <ul className={styles['menu-bar__dropdown']} role="menu">
              {items.map((item) => (
                <li
                  key={item}
                  className={styles['menu-bar__dropdown-item']}
                  data-action={
                    item === 'Change Background'
                      ? 'change-background'
                      : undefined
                  }
                  onClick={(e) => {
                    if (item === 'Change Background') {
                      e.stopPropagation(); // Prevent parent menu toggle
                      changeBackground();
                      closeMenu();
                    }
                  }}
                  onKeyDown={(e) =>
                    handleDropdownKeyDown(
                      e,
                      item === 'Change Background'
                        ? 'change-background'
                        : undefined,
                    )
                  }
                  role="menuitem"
                  tabIndex={0}
                  aria-label={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="menu-bar__time">
        <time
          id="nav-date"
          className={styles['menu-bar__clock']}
          aria-label="Current time"
        >
          {currentTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })}
        </time>
      </div>
    </nav>
  );
};

export default memo(MenuBarView);
