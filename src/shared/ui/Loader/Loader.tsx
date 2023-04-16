import { classNames } from '../../lib/classNames/classNames';

import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => {

    return (
        <div className={classNames(cls.loader, {}, [className])}>
            <div className={classNames(cls.loadingioSpinnerSpinner0T2K1Kt60C2M)}>
                <div className={classNames(cls.ldioRgph08Wye4)}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};


