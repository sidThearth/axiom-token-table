import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { TokenCell } from '@/components/molecules/TokenCell';
import { PriceCell } from '@/components/molecules/PriceCell';
import { VolumeCell } from '@/components/molecules/VolumeCell';
import { useTokenData } from '@/hooks/useTokenData';
import { RootState, setSort } from '@/lib/store';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export const TokenTable: React.FC = () => {
    const dispatch = useDispatch();
    const { tokens, isLoading } = useTokenData();
    const { sortColumn, sortDirection, filter, activeTab } = useSelector((state: RootState) => state.table);

    const filteredTokens = useMemo(() => {
        if (!tokens) return [];

        let result = tokens;

        // Filter by tab (mock logic for now as data is random)
        if (activeTab === 'new') {
            result = result.filter(t => t.isNew);
        } else if (activeTab === 'migrated') {
            result = result.filter(t => t.isMigrated);
        } else {
            // Final stretch logic (e.g. high volume but not migrated)
            result = result.filter(t => !t.isMigrated && !t.isNew);
        }

        // Filter by search
        if (filter) {
            const lowerFilter = filter.toLowerCase();
            result = result.filter(t =>
                t.name.toLowerCase().includes(lowerFilter) ||
                t.symbol.toLowerCase().includes(lowerFilter)
            );
        }

        // Sort
        if (sortColumn && sortDirection) {
            result = [...result].sort((a, b) => {
                const aValue = a[sortColumn as keyof typeof a];
                const bValue = b[sortColumn as keyof typeof b];

                if (typeof aValue === 'number' && typeof bValue === 'number') {
                    return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
                }
                return 0;
            });
        }

        return result;
    }, [tokens, filter, activeTab, sortColumn, sortDirection]);

    const handleSort = (column: string) => {
        const newDirection =
            sortColumn === column && sortDirection === 'desc'
                ? 'asc'
                : 'desc';
        dispatch(setSort({ column, direction: newDirection }));
    };

    const SortIcon = ({ column }: { column: string }) => {
        if (sortColumn !== column) return <ArrowUpDown className="ml-2 h-4 w-4 text-axiom-text-muted" />;
        if (sortDirection === 'asc') return <ArrowUp className="ml-2 h-4 w-4 text-axiom-text-primary" />;
        return <ArrowDown className="ml-2 h-4 w-4 text-axiom-text-primary" />;
    };

    if (isLoading) {
        return (
            <div className="p-4 space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-12 w-full bg-axiom-highlight" />
                ))}
            </div>
        );
    }

    return (
        <div className="w-full bg-axiom-card rounded-lg border border-axiom-border overflow-hidden">
            <Table>
                <TableHeader className="bg-axiom-dark">
                    <TableRow className="border-axiom-border hover:bg-axiom-dark">
                        <TableHead className="w-[300px] text-axiom-text-secondary cursor-pointer" onClick={() => handleSort('name')}>
                            <div className="flex items-center">Token <SortIcon column="name" /></div>
                        </TableHead>
                        <TableHead className="text-right text-axiom-text-secondary cursor-pointer" onClick={() => handleSort('price')}>
                            <div className="flex items-center justify-end">Price <SortIcon column="price" /></div>
                        </TableHead>
                        <TableHead className="text-right text-axiom-text-secondary cursor-pointer" onClick={() => handleSort('volume')}>
                            <div className="flex items-center justify-end">Volume <SortIcon column="volume" /></div>
                        </TableHead>
                        <TableHead className="text-right text-axiom-text-secondary cursor-pointer" onClick={() => handleSort('change24h')}>
                            <div className="flex items-center justify-end">Change <SortIcon column="change24h" /></div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredTokens.map((token) => (
                        <TableRow key={token.id} className="border-axiom-border hover:bg-axiom-highlight/50 transition-colors">
                            <TableCell className="font-medium">
                                <TokenCell
                                    name={token.name}
                                    symbol={token.symbol}
                                    iconUrl={token.iconUrl}
                                    isNew={token.isNew}
                                    isMigrated={token.isMigrated}
                                />
                            </TableCell>
                            <TableCell className="text-right">
                                <PriceCell price={token.price} />
                            </TableCell>
                            <TableCell className="text-right">
                                <VolumeCell volume={token.volume} />
                            </TableCell>
                            <TableCell className="text-right">
                                <VolumeCell change24h={token.change24h} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};