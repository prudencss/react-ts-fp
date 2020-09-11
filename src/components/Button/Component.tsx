import React, { FC } from 'react';
import classNames from 'classnames';

import { IBehaviorProps } from '../../lib/Behaviors';
import useBehavior from '../../lib/useBehavior';

export enum EButtonType = {
  Basic = 'c-btn-basic',
  NoBorder = 'c-btn--no-border',
  Stroked = 'c-btn--stroked',
  Flat = 'c-btn--flat',
  Ghost = 'c-btn--ghost',
};

export interface IProps extend IBehaviorProps {
  /**
   * Define _button behaviour_
   * *default:* 'button'
   * *options:* 'button', 'submit', 'reset'
   * *example:*
   * ```tsx
   * import Button, { IProps as IButtonProps } from '@prudencss/react-ts-fp/components';
   *
   *   <Button
   *     htmlType="submit"
   *   >
   *     {buttonContent}
   *   </Button>
   * ```
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Add _custom styles_ as string-array class-list
   * *default:* []
   * *example:*
   * ```tsx
   * import Button, { EButtonType } from '@prudencss/react-fp';
   *
   * <Button
   *   moduleSpecificClassList={['first-module__buttons--primary', 'u-hidden@xl']}
   * >
   *   {buttonContent}
   * </Button>
   * ```
   */
  moduleSpecificClassList?: string[];

  /**
   * Add prepackaged styles per type easily
   * *options:* ```EButtonType```
   */
  buttonType?: EButtonType;

  /**
   * Make the button a Floating Action Button (circular)
   */
  fab?: boolean;
  onClick: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
  onBlur?: (ev: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const Button = <Props extends IBehaviorProps>(props) => {
    const { onClick, onBlur, moduleSpecificClassList, type, buttonType, fab } = this.props;
    const classList = classNames(
      'c-btn',
      buttonType,
      { 'c-btn--fab': fab ?? false },
      useBehavior(props),
      moduleSpecificClassList,
    );
    const optionalDisabledProps = disabled ? { disabled: true, "aria-disabled": true } : {};

  handleTransitionEndEvents = (ev: React.TransitionEvent<HTMLElement>): boolean => {
      ev.stopPropagation();
      ev.preventDefault();

      return false;
    }
  }

  return (
    <button
      type={type ?? 'button'}
      className={classList}
      {...optionalDisabledProps}
      onClick={onClick}
      onBlur={onBlur}
      onTransitionEnd={this.handleTransitionEndEvents}
    >
      {this.props.children}
    </button >
  );
  }


export default Button;

