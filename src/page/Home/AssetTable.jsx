import React from "react";
import { Table, TableCaption, TableHead, TableHeader, TableRow, TableBody, TableCell} from "@/components/ui/table"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";


const AssetTable = () => {
  const navigate = useNavigate();
  
  return (
    <Table>
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
        {[1,1,1,1,1,1,1,1,1].map((item, index) => <TableRow key = {index}>
          <TableCell onClick = {() => navigator(`/market/bitcoin/`)} className="font-medium flex items-center gap-2">
            <Avatar className = "-z-50">
                <AvatarImage src = "https://coin-images.coingecko.com/coins/iamges/1/large/bitcoin.png?1696501400"/>
            </Avatar>
            <span>Bitcoin</span>
          </TableCell>
          <TableCell>BTC</TableCell>
          <TableCell>9124463121</TableCell>
          <TableCell>1364881428323</TableCell>
          <TableCell>-0.200009</TableCell>
          <TableCell className="text-right">$69249</TableCell>
        </TableRow>)}
        </TableBody>
    </Table>
  );
}

export default AssetTable;
