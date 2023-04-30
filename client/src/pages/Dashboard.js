import * as React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_CATEGORIES, QUERY_USERS } from '../utils/queries';
import Plot from 'react-plotly.js';
import './dashboard.css';


export default function Dashboard() {

    function Products() {
        const { loading, error, data } = useQuery(QUERY_PRODUCTS)
        if (loading) return <p>Loading data...</p>;
        if (error) return <p>`Error! ${error}`</p>;
        return data.products
    }

    const productList = Products();

    function Categories() {
        const { loading, error, data } = useQuery(QUERY_CATEGORIES);
        if (loading) return <p>Loading data...</p>;
        if (error) return <p>`Error! ${error}`</p>;
        return data.categories
    };

    const categoryList = Categories();


    function Customers() {
        const { loading, error, data } = useQuery(QUERY_USERS);
        if (loading) return <p>Loading data...</p>;
        if (error) return <p>`Error! ${error}`</p>;
        return data
    }

    const customerList = Customers();

    const categoryIdDict = new Map();
    const categoryNameDict = new Map();
    const categoryTotals = new Map();
    const productCategoryDict = new Map();

    for (let i = 0; i < categoryList.length; i++) {
        categoryIdDict.set(categoryList[i]._id, 0);
        categoryNameDict.set(categoryList[i]._id, categoryList[i].name);
    };


    let temp = 0;
    for (let i = 0; i < productList.length; i++) {
        temp = categoryIdDict.get(productList[i].category._id);
        temp = temp + 1;
        categoryIdDict.set(productList[i].category._id, temp);

        productCategoryDict.set(productList[i]._id, productList[i].category._id);
    };

    for (let [key, value] of categoryIdDict) {
        const name = categoryNameDict.get(key);
        categoryTotals.set(name, value);
    };

    var categoryLabels = [...categoryTotals.keys()];
    var categoryValues = [...categoryTotals.values()];
    var pieData = [
        {
            values: categoryValues,
            labels: categoryLabels,
            type: "pie",
        },
    ];

    var barData = [
        {
            x: categoryLabels,
            y: categoryValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
        },
        { type: 'bar', x: categoryLabels, y: categoryValues },
    ];


    return (

        <main className="container">
            <div className="p-4 p-md-5 mb-4 rounded text-bg-dark dashboard-bg-img" style={{ height: '25em' }}>
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">Dashboard</h1>
                    <p className="lead my-3"></p>

                </div>
            </div>


            <div className="row g-5">
                <div className="col-md-8">
                    <h3 className="pb-4 mb-4 fst-italic border-bottom">
                        Dashboard
                    </h3>


                </div>
            </div>

            <Plot
                data={pieData}
                layout={{ height: 500, width: 500, title: "Percentage of Products By Category" }}
            />
            <Plot
                data={barData}
                layout={{ width: 750, height: 500, title: 'Product Totals By Category' }} />

        </main>
    )
}