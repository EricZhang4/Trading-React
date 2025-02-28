import React from "react";
import { Table, TableCaption, TableHead, TableHeader, TableRow, TableBody, TableCell} from "@/components/ui/table"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";


const AssetTable = ({coin, category}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <Table>
      <ScrollArea className = {`${category == "all" ? "h-[77.3vh]" : "h-[82vh]"}`}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Coin</TableHead>
          <TableHead>SYMBOL</TableHead>
          <TableHead>VOLUME</TableHead>
          <TableHead>MARKET CAP</TableHead>
          <TableHead>24h</TableHead>
          <TableHead className="text-right">PRICE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coin.map((item, index) => <TableRow key = {item.id}>
          <TableCell onClick = {() => navigator(`/market/${item.id}/`)} className="font-medium flex items-center gap-2">
            <Avatar className = "-z-50">
                <AvatarImage src = {item.image}/>
            </Avatar>
            <span>{item.name}</span>
          </TableCell>
          <TableCell>{item.symbol}</TableCell>
          <TableCell>{item.total_volume}</TableCell>
          <TableCell>{item.market_cap}</TableCell>
          <TableCell>{item.price_change_percentage_24h}</TableCell>
          <TableCell className="text-right">${item.current_price}</TableCell>
        </TableRow>)}
        </TableBody>
      </ScrollArea>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Coin</TableHead>
          <TableHead>SYMBOL</TableHead>
          <TableHead>VOLUME</TableHead>
          <TableHead>MARKET CAP</TableHead>
          <TableHead>24h</TableHead>
          <TableHead className="text-right">PRICE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coin.map((item, index) => <TableRow key = {item.id}>
          <TableCell onClick = {() => navigator(`/market/${item.id}/`)} className="font-medium flex items-center gap-2">
            <Avatar className = "-z-50">
                <AvatarImage src = {item.image}/>
            </Avatar>
            <span>{item.name}</span>
          </TableCell>
          <TableCell>{item.symbol}</TableCell>
          <TableCell>{item.total_volume}</TableCell>
          <TableCell>{item.market_cap}</TableCell>
          <TableCell>{item.price_change_percentage_24h}</TableCell>
          <TableCell className="text-right">${item.current_price}</TableCell>
        </TableRow>)}
        </TableBody>
    </Table>
  );
}

export default AssetTable;
