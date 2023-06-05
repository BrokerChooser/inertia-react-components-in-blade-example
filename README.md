
```shell
composer require brokerchooser/inertia-react-components-in-blade
php artisan vendor:publish --provider="BrokerChooser\InertiaReactComponentsInBlade\InertiaReactComponentsInBladeServiceProvider" --tag=component-map

php artisan vendor:publish --provider="BrokerChooser\InertiaReactComponentsInBlade\InertiaReactComponentsInBladeServiceProvider" --tag=example
```

This is an example repository to show BrokerChooser's [inertia-react-components-in-blade](https://github.com/BrokerChooser/inertia-react-components-in-blade) package works in a vanilla Laravel Breeze installation.

## Installation

You can install the package via composer:

```shell
composer require brokerchooser/inertia-react-components-in-blade
```

To register your React component you need to publish a `getComponent.ts` file and include

```shell
php artisan vendor:publish --provider="BrokerChooser\InertiaReactComponentsInBlade\InertiaReactComponentsInBladeServiceProvider" --tag=component-map
```

Optionally, You can publish an example component to your own repository with:

```shell
php artisan vendor:publish --provider="BrokerChooser\InertiaReactComponentsInBlade\InertiaReactComponentsInBladeServiceProvider" --tag=example
```

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to BrokerChooser via [info@brokerchooser.com](mailto:info@brokerchooser.com). All security vulnerabilities will be promptly addressed.

## License

The package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
