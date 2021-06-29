puts "please give me a letter"
first = gets.chomp

puts "please give me another letter"
second = gets.chomp

puts "please give me one last letter"
third = gets.chomp

permutation_arr = [first,second,third]
result = permutation_arr.repeated_permutation(3).to_a

for item in result
    puts item.join
end