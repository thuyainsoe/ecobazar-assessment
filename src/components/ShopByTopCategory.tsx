import categoryImg1 from "@/assets/categories/category_1.png";
import categoryImg2 from "@/assets/categories/category_2.png";
import categoryImg3 from "@/assets/categories/category_3.png";
import categoryImg4 from "@/assets/categories/category_4.png";
import categoryImg5 from "@/assets/categories/category_5.png";
import categoryImg6 from "@/assets/categories/category_6.png";
import categoryImg7 from "@/assets/categories/category_7.png";
import categoryImg8 from "@/assets/categories/category_8.png";
import categoryImg9 from "@/assets/categories/category_9.png";
import categoryImg10 from "@/assets/categories/category_10.png";
import categoryImg11 from "@/assets/categories/category_11.png";
import categoryImg12 from "@/assets/categories/category_12.png";

const categoryData = [
  {
    id: 1,
    label: "Fresh Fruit",
    image: categoryImg1,
  },
  {
    id: 2,
    label: "Meat & Fish",
    image: categoryImg2,
  },
  {
    id: 3,
    label: "Snacks",
    image: categoryImg3,
  },
  {
    id: 4,
    label: "Beverages",
    image: categoryImg4,
  },
  {
    id: 5,
    label: "Beauty & Health",
    image: categoryImg5,
  },
  {
    id: 6,
    label: "Fresh Vegetables",
    image: categoryImg6,
  },
  {
    id: 7,
    label: "Bread & Bakery",
    image: categoryImg7,
  },
  {
    id: 8,
    label: "Baking Needs",
    image: categoryImg8,
  },
  {
    id: 9,
    label: "Cooking",
    image: categoryImg9,
  },
  {
    id: 10,
    label: "Diabetic Food",
    image: categoryImg10,
  },
  {
    id: 11,
    label: "Dish Detergents",
    image: categoryImg11,
  },
  {
    id: 12,
    label: "Oil",
    image: categoryImg12,
  },
];

const ShopByTopCategory = () => {
  return (
    <div className="w-full mt-[30px] lg:mt-[60px] flex flex-col items-center">
      <p className="text-brandsuccess uppercase text-sm font-[500]">Category</p>
      <h3 className="mt-[3px] text-[30px] lg:text-[36px] font-[600] text-center">
        Shop by Top Categories
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[12px] md:gap-[18px] xl:gap-[24px] w-full mt-[36px]">
        {categoryData.map((item) => (
          <div
            key={item.id}
            className="w-full border border-lightgray py-[10px] md:pt-[16px] md:pb-[24px]
             flex flex-col gap-[16px] items-center px-[10px] hover-green-shadow"
          >
            <img
              className="w-full aspect-[190_/_130] object-contain"
              src={item.image}
              alt="category image"
            />
            <span className="text-black2 text-base xl:text-lg font-[500] text-center ">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByTopCategory;
