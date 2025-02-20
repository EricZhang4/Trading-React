import React from 'react'
import { Table, TableHeader, TableRow, TableBody, TableHead, TableCell } from '@/components/ui/table'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
const Activity = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text3xl pb-5">Activity</h1>
      <Table className = "border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead>Treading pair</TableHead>/TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Sell Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead className="">Profit/Loss</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1,1,1,1,1,1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell><p>
                2024/05/31
                </p>
                <p className ="text-gray-400">12:39:32</p>
            </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src="https://coin-images.coingecko.com/coins/iamges/1/large/bitcoin.png?1696501400" />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              
              <TableCell className = "">$69249</TableCell>
              <TableCell>1364881428323</TableCell>
              <TableCell>-0.200009</TableCell>
              <TableCell className="">$69249</TableCell>
              <TableCell className="text-right">
                <Button variant = "ghost" onClick = {() => handleRemoveToWatchlist(item.id)} size = "icon" className = "h-10 w-10">
                  <BookmarkFilledIcon classname = "w-6 h-6"/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Activity