<?php
/**
 * Factory for the Item Model
 * PHP version 8
 *
 * @category ERP
 * @package  SapKiller
 * @author   Adi Oporanu <aoporanu@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @link     http://zvelt-erp.com
 */
namespace Database\Factories;

use App\Models\Brand;
use App\Models\Item;
use App\Models\Category;
use App\Models\Packaging;
use App\Models\UnitOfMeasure;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * Factory for the Item Model
 *
 * @category ERP
 * @package  SapKiller
 * @author   Adi Oporanu <aoporanu@gmail.com>
 * @license  http://opensource.org/licenses/gpl-license.php  GNU Public License
 * @link     http://zvelt-erp.com
 */
class ItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Item::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'              => $this->faker->word(),
            'vat'               => $this->faker->randomElement(['9', '19', '13']),
            'price'             => $this->faker->numerify('##.##'),
            'category_id'       => function () {
                return Category::inRandomOrder()->first()->id;
            },
            'sku'               => $this->faker->unique()->creditCardNumber(),
            'weight'            => $this->faker->randomDigit,
            'brand_id'          => function () {
                return Brand::inRandomOrder()->first()->id;
            },
            'unit_of_measure'   => function () {
                return UnitOfMeasure::inRandomOrder()->first()->id;
            },
            'packaging'         => function () {
                return Packaging::inRandomOrder()->first()->id;
            },
            'per_packaging'     => $this->faker->randomDigit,
        ];
    }
}
