import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Search from './core/Search';
import Signin from './core/Signin';
import Signup from './core/Signup';
import AddCategory from './core/AddCategory';
import AddFood from './core/AddFood';
import AddFashionWoman from './core/AddFashionWoman';
import AddFashionMen from './core/AddFashionMen';
import AddFit from './core/AddFit';
import AddLaptop from './core/AddLaptop';
import AddSmartphone from './core/AddSmartphone';
import AddElectronic from './core/AddElectronic';
import AddBook from './core/AddBook';
import AddOther from './core/AddOther';
import Foods from './core/Foods';
import FashionWomans from './core/FashionWomans';
import FashionMens from './core/FashionMens';
import Fitness from './core/Fitness';
import Laptops from './core/Laptops';
import Smartphones from './core/Smartphones';
import Electronics from './core/Electronics';
import Books from './core/Books';
import Others from './core/Others';
import Food from './core/Food';
import FashionWoman from './core/FashionWoman';
import FashionMen from './core/FashionMen';
import Fitnes from './core/Fitnes';
import Laptop from './core/Laptop';
import Smartphone from './core/Smartphone';
import Electronic from './core/Electronic';
import Book from './core/Book';
import Other from './core/Other';
import Products from './core/Products';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/food/:foodId" exact component={Food} />
                <Route path="/fashionWoman/:fashionWomanId" exact component={FashionWoman} />
                <Route path="/fashionMen/:fashionMenId" exact component={FashionMen} />
                <Route path="/fit/:fitId" exact component={Fitnes} />
                <Route path="/laptop/:laptopId" exact component={Laptop} />
                <Route path="/smartphone/:smartphoneId" exact component={Smartphone} />
                <Route path="/electronic/:electronicId" exact component={Electronic} />
                <Route path="/book/:bookId" exact component={Book} />
                <Route path="/other/:otherId" exact component={Other} />
                <Route path="/search" exact component={Search} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/addcategory" exact component={AddCategory} />
                <Route path="/addfood" exact component={AddFood} />
                <Route path="/addfashionwoman" exact component={AddFashionWoman} />
                <Route path="/addfashionmen" exact component={AddFashionMen} />
                <Route path="/addfit" exact component={AddFit} />
                <Route path="/addlaptop" exact component={AddLaptop} />
                <Route path="/addsmartphone" exact component={AddSmartphone} />
                <Route path="/addelectronic" exact component={AddElectronic} />
                <Route path="/addbook" exact component={AddBook} />
                <Route path="/addother" exact component={AddOther} />
                <Route path="/foods" exact component={Foods} />
                <Route path="/fashionWomans" exact component={FashionWomans} />
                <Route path="/fashionMens" exact component={FashionMens} />
                <Route path="/fitness" exact component={Fitness} />
                <Route path="/laptops" exact component={Laptops} />
                <Route path="/smartphones" exact component={Smartphones} />
                <Route path="/electronics" exact component={Electronics} />
                <Route path="/books" exact component={Books} />
                <Route path="/others" exact component={Others} />
                <Route path="/products" exact component={Products} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;