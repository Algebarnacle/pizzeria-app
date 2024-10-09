"use client";

import { getJSONData } from '@/tools/Toolkit';
import { Orders, Order } from '@/tools/orders.model';
import { useEffect, useState } from 'react';

export default function OrdersReport( { setAppState, appState }:{ setAppState:Function, appState:number } ) {
    // retrieve server sided script
    const RETRIEVE_SCRIPT:string = "https://www.seanmorrow.ca/_lessons/retrieveOrder.php";


    const getOrders = async () => {
        const data:Orders = await getJSONData(RETRIEVE_SCRIPT, false, true)
        console.log(data);
        setOrders(data.orders);

        setAppState(3);
    };



    // ----------------------- useEffects
    useEffect(() => {
        if (appState == 2) getOrders();
    }, [appState]);

    // ------------------------ state variables
    const [orders, setOrders] = useState<Order[]>([]);
  

    if (appState == 1) {
        return (<>No orders retrieved...</>);
    } else if (appState == 3) {
        return (
            <>
                !!! render out orders content here !!!
            </>
        )
    }
}
