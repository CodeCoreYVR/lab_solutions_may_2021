# How many sides does a hexagon have?
# 1- five
# 2- six
# 3- seven

# Enter the correct number:

puts "How many sides does a hexagon have?"
puts "1- five"
puts "2- six"
puts "3- seven"
answer_1 = gets.chomp

puts "What is my name?"
puts "1- Mao"
puts "2- John"
puts "3- Tom"
answer_2 = gets.chomp

puts "What are we learning today?"
puts "1- JavaScript"
puts "2- Ruby"
puts "3- HTML"
answer_3 = gets.chomp

# You scored 66%, you got 2 out of 3 questions correctly.

correct_answers = 0
if answer_1 == "2"
  # do sth here
  correct_answers += 1
end

if answer_2 == "1"
  # do sth here
  correct_answers += 1
end

if answer_3 == "2"
  # do sth here
  correct_answers += 1
end

puts "You scored #{(correct_answers/3.0)*100}%, you got #{correct_answers} out of 3 questions correctly."