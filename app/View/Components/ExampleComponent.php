<?php

namespace App\View\Components;

use BrokerChooser\InertiaReactComponentsInBlade\View\Components\ReactComponent;

class ExampleComponent extends ReactComponent
{
    public function __construct(
        string $name = 'World',
    ) {
        parent::__construct([
            'name' => $name,
        ]);
    }
}
